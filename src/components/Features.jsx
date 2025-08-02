import React from "react";
import Tilt from "react-parallax-tilt";

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-green-700 px-6">
      <h2 className="text-4xl text-center font-bold mb-12 text-green-200">
        Unsere Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <FeatureKA title="Feature 1" desc="Feature 1" />
        <FeatureKA title="Feature 2" desc="2" />
        <FeatureKA title="Feature 3" desc="3" />
      </div>
    </section>
  );
}

function FeatureKA({ title, desc }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-xl">
      <Tilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        glareEnable={true}
        glareMaxOpacity={0.2}
        glareColor="#ffffff"
        glarePosition="all"
        style={{
          borderRadius: "1rem", 
          overflow: "hidden",   
        }}
      >
        <div className="bg-white p-6 rounded-2xl">
          <h3 className="text-xl font-semibold text-green-900 mb-4">{title}</h3>
          <p>{desc}</p>
        </div>
      </Tilt>
    </div>
  );
}
