import React, { useEffect, useState } from "react";
import { FaHome, FaServer, FaUsers, FaPowerOff } from "react-icons/fa";
import { useCounter } from "../../hooks/useCounter";
import EmbedBuilder from "../../components/EmbedBuilder";

const DISCORD_CLIENT_ID = "1398015116225544263";

export default function Dashboard() {
  const [stats, setStats] = useState(null);
  const [user, setUser] = useState(null);
  const [active, setActive] = useState("dashboard");
  const [servers, setServers] = useState([]);
  const [loadingServers, setLoadingServers] = useState(false);
  const [selectedServer, setSelectedServer] = useState(null);
  const [startEmbed, setStartEmbed] = useState({});
  const [stopEmbed, setStopEmbed] = useState({});

  const guildCount = useCounter(0, stats?.serverCount || 0, 1000);
  const memberCount = useCounter(0, stats?.memberCount || 0, 1000);

  useEffect(() => {
    fetch("http://37.114.46.24:3000/stats")
      .then((res) => res.json())
      .then(setStats)
      .catch(() => {});

    fetch("http://37.114.46.24:3000/me", { credentials: "include" })
      .then((res) => {
        if (!res.ok) {
          window.location.href = "/";
          return null;
        }
        return res.json();
      })
      .then((data) => {
        if (data) setUser(data);
      })
      .catch(() => {
        window.location.href = "/";
      });
  }, []);

  const handleLogout = () => {
    window.location.href = "http://37.114.46.24:3000/logout";
  };

  const handleOpenServers = () => {
    setActive("servers");
    setSelectedServer(null);
    if (servers.length === 0) {
      setLoadingServers(true);
      fetch("http://37.114.46.24:3000/servers", { credentials: "include" })
        .then((r) => {
          if (!r.ok) throw new Error();
          return r.json();
        })
        .then((data) => setServers(data))
        .finally(() => setLoadingServers(false));
    }
  };

  const handleSubmit = () => {
    console.log("Start Embed:", startEmbed);
    console.log("Stop Embed:", stopEmbed);
    // über api handeln muss aber warten bis dings fertig ist
  };

  const inviteUrl = (guildId) =>
    `https://discord.com/oauth2/authorize?client_id=${DISCORD_CLIENT_ID}&scope=bot%20applications.commands&permissions=8&guild_id=${guildId}&disable_guild_select=true`;

  return (
    <div className="flex min-h-screen bg-[#0e1628] text-white">
      <aside className="w-60 bg-[#10192d] p-6 flex flex-col justify-between shadow-lg sticky top-0 h-screen">
        <div>
          <h1 className="text-2xl font-bold mb-8">FrogBot</h1>
          <nav className="space-y-4">
            {!selectedServer ? (
              <>
                <NavItem
                  icon={<FaHome />}
                  label="Dashboard"
                  active={active === "dashboard"}
                  onClick={() => setActive("dashboard")}
                />
                <NavItem
                  icon={<FaServer />}
                  label="Servers"
                  active={active === "servers"}
                  onClick={handleOpenServers}
                />
                <NavItem
                  icon={<FaUsers />}
                  label="Placeholder"
                  active={active === "placeholder"}
                  onClick={() => setActive("placeholder")}
                />
              </>
            ) : (
              <>
                <p className="text-xs text-gray-400 uppercase tracking-wider mt-4 mb-1">
                  Roleplay
                </p>
                <NavItem
                  label="Start/Stop"
                  active={active === "startstop"}
                  onClick={() => setActive("startstop")}
                />
                <NavItem
                  label="Ausweise"
                  active={active === "ausweise"}
                  onClick={() => setActive("ausweise")}
                />

                <p className="text-xs text-gray-400 uppercase tracking-wider mt-6 mb-1">
                  Support
                </p>
                <NavItem
                  label="Ticket"
                  active={active === "ticket"}
                  onClick={() => setActive("ticket")}
                />
                <NavItem
                  label="Voice Support"
                  active={active === "voicesupport"}
                  onClick={() => setActive("voicesupport")}
                />
              </>
            )}
          </nav>
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 py-2 px-4 rounded-lg flex items-center justify-center space-x-2"
        >
          <FaPowerOff />
          <span>Logout</span>
        </button>
      </aside>

      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-semibold">
            {selectedServer
              ? `Verwalte: ${selectedServer.name}`
              : active === "dashboard"
              ? "Dashboard"
              : active === "servers"
              ? "Servers"
              : "Placeholder"}
          </h2>
          {user && (
          <div className="flex items-center space-x-3">
              <img
                src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`}
                alt="Avatar"
                className="w-9 h-9 rounded-full"
              />
              <span className="text-sm">{user.username}</span>
            </div>
          )}
        </div>


        {!selectedServer && active === "dashboard" && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <StatCard title="Bot Status" value="Online" color="text-green-400" />
              <StatCard title="Servers" value={guildCount} color="text-blue-400" />
              <StatCard title="User" value={memberCount} color="text-yellow-400" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-[#1c2a3a] p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold mb-3 text-blue-400">Update</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Placeholder item 1</li>
                  <li>• Placeholder item 2</li>
                  <li>• Placeholder item 3</li>
                </ul>
              </div>
              <div className="bg-[#1c2a3a] p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold mb-3 text-green-400">Announcements</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Placeholder item 1</li>
                  <li>• Placeholder item 2</li>
                  <li>• Placeholder item 3</li>
                </ul>
              </div>
            </div>
          </>
        )}


        {!selectedServer && active === "servers" && (
          <div className="bg-[#1c2a3a] p-6 rounded-xl shadow-md">
            {loadingServers ? (
              <p className="text-gray-400 text-sm">Loading...</p>
            ) : servers.length === 0 ? (
              <p className="text-gray-400 text-sm">No servers found</p>
            ) : (
              <ul className="divide-y divide-[#223247]">
                {servers.map((g) => (
                  <li key={g.id} className="py-4 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {g.icon ? (
                        <img
                          src={`https://cdn.discordapp.com/icons/${g.id}/${g.icon}.png`}
                          alt={g.name}
                          className="w-12 h-12 rounded"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded bg-[#223247] flex items-center justify-center text-lg font-semibold">
                          {g.name?.charAt(0).toUpperCase()}
                        </div>
                      )}
                      <span className="text-base">{g.name}</span>
                    </div>

                    {g.botInGuild ? (
                      <button
                        onClick={() => {
                          setSelectedServer(g);
                          setActive("startstop");
                        }}
                        className="bg-blue-600 hover:bg-blue-700 text-sm px-4 py-2 rounded-md"
                      >
                        Verwalte
                      </button>
                    ) : (
                      <a
                        href={inviteUrl(g.id)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 hover:bg-blue-600 text-sm px-4 py-2 rounded-md text-center block"
                      >
                        Einladen
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}


        {!selectedServer && active === "placeholder" && (
          <div className="bg-[#1c2a3a] p-6 rounded-xl shadow-md">
            <p className="text-gray-300 text-sm">Placeholder content</p>
          </div>
        )}


        {selectedServer && active === "startstop" && (
          <div className="space-y-12">
            <div className="relative mb-4">
              <button
                onClick={() => {
                  setSelectedServer(null);
                  setActive("servers");
                }}
                className="absolute left-0 bg-[#223247] hover:bg-[#2e3a50] text-gray-200 px-4 py-2 rounded-md transition-colors duration-150"
              >
                ← Go Back
              </button>
              <h3 className="text-center text-lg text-gray-200">Start Embed</h3>
            </div>

            <section>
              <EmbedBuilder type="start" onChange={setStartEmbed} defaultEmbed={startEmbed} />
            </section>

            <section>
              <h3 className="text-center text-lg text-gray-200">Stop Embed</h3>
              <EmbedBuilder type="stop" onChange={setStopEmbed} defaultEmbed={stopEmbed} />
            </section>

            <div className="flex justify-end">
              <button
                onClick={handleSubmit}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md"
              >
                Submit
              </button>
            </div>
          </div>
        )}


        {selectedServer && active !== "startstop" && (
          <div className="bg-[#1c2a3a] p-6 rounded-xl shadow-md">
            <p className="text-gray-300 text-sm">View: {active}</p>
          </div>
        )}
      </main>
    </div>
  );
}

function NavItem({ icon, label, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center space-x-2 px-3 py-2 rounded-md cursor-pointer ${
        active ? "bg-blue-600 text-white" : "hover:bg-[#192842] text-gray-300"
      }`}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}

function StatCard({ title, value, color }) {
  return (
    <div className="bg-[#1c2a3a] p-6 rounded-xl shadow-md">
      <h3 className="text-sm text-gray-400">{title}</h3>
      <p className={`text-2xl font-bold mt-1 ${color}`}>{value}</p>
    </div>
  );
}
