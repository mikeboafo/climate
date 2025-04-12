import React from "react";

export const LocalImpact = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          {/* Text Section (Left) */}
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Climate Africa Newspaper 🌍</h2>
              <p>
                Climate Africa Newspaper is a dedicated publication focused on climate change and environmental sustainability across the African continent.
                As the climate crisis grows increasingly urgent, our mission is to inform, engage, and empower readers — from policymakers and businesses to grassroots activists and the general public.
                We deliver timely news, in-depth analysis, and highlight innovative solutions to the climate challenges faced by African communities. 🌱
              </p>

              <h3>Our Objectives 🌎</h3>
              <ul>
                <li><strong>Raise Awareness:</strong> Increase public understanding of climate impacts, policies, and community adaptation strategies. 🔍</li>
                <li><strong>Promote Solutions:</strong> Highlight successful initiatives and innovative practices in climate adaptation and mitigation across Africa. 💡</li>
                <li><strong>Foster Engagement:</strong> Create a platform for dialogue among government agencies, NGOs, businesses, and local communities. 🤝</li>
                <li><strong>Advocate for Policy Change:</strong> Provide evidence-based analyses and recommendations to influence climate-related policies. 📜</li>
              </ul>

              <h3>Content Focus 🌿</h3>
              <ul>
                <li><strong>Local Impact Stories:</strong> Personal narratives of communities affected by climate change. 🌾</li>
                <li><strong>Policy Analysis:</strong> Examination of climate policies and advocacy for effective legislation. 📊</li>
                <li><strong>Research and Science:</strong> Summaries of key climate research relevant to Africa. 🔬</li>
                <li><strong>Technology and Innovation:</strong> Features on sustainable agriculture, energy, and resource management technologies. ⚙️</li>
                <li><strong>Environmental Justice:</strong> Exploring the intersection of climate change with social, economic, and racial justice. ⚖️</li>
                <li><strong>Cultural Perspectives:</strong> Insights into how African cultures respond to environmental challenges. 🎭</li>
                <li><strong>Global Context:</strong> Analysis of international climate agreements and their implications for Africa. 🌐</li>
              </ul>

              <h3>Target Audience 🎯</h3>
              <ul>
                <li><strong>Policymakers:</strong> Government officials, legislators, and regional institutions. 🏛️</li>
                <li><strong>Businesses:</strong> Companies involved in agriculture, renewable energy, and sustainable practices. 🏢</li>
                <li><strong>Researchers and Academics:</strong> Scholars in climate science, social sciences, and environmental studies. 🎓</li>
                <li><strong>Community Leaders:</strong> Local activists and leaders working on climate resilience initiatives. 🌍</li>
              </ul>
            </div>
          </div>

          {/* Image Section (Right) with 3 images */}
          <div className="col-xs-12 col-md-6">
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <img
                src="img/pg1.jpg"
                className="img-responsive"
                alt="Climate Action"
                style={{ width: "100%", borderRadius: "10px" }}
              />
              <img
                src="img/pg3.jpg"
                className="img-responsive"
                alt="Environmental Sustainability"
                style={{ width: "100%", borderRadius: "10px" }}
              />
  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};




