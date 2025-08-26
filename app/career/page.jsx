"use client"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useState } from "react"

export default function CareerPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [locationFilter, setLocationFilter] = useState("all")
  const [roleFilter, setRoleFilter] = useState("all")

  const jobs = [
    {
      id: 1,
      company: "Google",
      logo: "/google-logo.png",
      role: "Full Stack Developer",
      location: "Mountain View, CA",
      salary: "$120k - $180k",
      type: "Full-time",
      remote: "Yes",
      posted: "2 days ago",
      applicants: 45,
    },
    {
      id: 2,
      company: "Meta",
      logo: "/meta-facebook-logo.png",
      role: "React Developer",
      location: "Menlo Park, CA",
      salary: "$110k - $160k",
      type: "Full-time",
      remote: "No",
      posted: "1 day ago",
      applicants: 67,
    },
    {
      id: 3,
      company: "Netflix",
      logo: "/netflix-inspired-logo.png",
      role: "Node.js Backend Developer",
      location: "Los Gatos, CA",
      salary: "$130k - $190k",
      type: "Full-time",
      remote: "Yes",
      posted: "3 days ago",
      applicants: 32,
    },
    {
      id: 4,
      company: "Airbnb",
      logo: "/airbnb-logo-inspired-abstract.png",
      role: "MERN Stack Developer",
      location: "San Francisco, CA",
      salary: "$115k - $170k",
      type: "Full-time",
      remote: "Yes",
      posted: "5 days ago",
      applicants: 89,
    },
    {
      id: 5,
      company: "Spotify",
      logo: "/spotify-logo.png",
      role: "Frontend Developer",
      location: "New York, NY",
      salary: "$105k - $155k",
      type: "Full-time",
      remote: "No",
      posted: "1 week ago",
      applicants: 56,
    },
    {
      id: 6,
      company: "Stripe",
      logo: "/stripe-logo.png",
      role: "Full Stack Engineer",
      location: "Remote",
      salary: "$125k - $185k",
      type: "Full-time",
      remote: "Yes",
      posted: "4 days ago",
      applicants: 78,
    },
    {
      id: 7,
      company: "Shopify",
      logo: "/shopify-logo.png",
      role: "JavaScript Developer",
      location: "Ottawa, Canada",
      salary: "$90k - $140k",
      type: "Full-time",
      remote: "Yes",
      posted: "6 days ago",
      applicants: 43,
    },
    {
      id: 8,
      company: "Uber",
      logo: "/provider-logos/uber.png",
      role: "Senior React Developer",
      location: "San Francisco, CA",
      salary: "$140k - $200k",
      type: "Full-time",
      remote: "No",
      posted: "2 days ago",
      applicants: 91,
    },
  ]

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesLocation =
      locationFilter === "all" ||
      (locationFilter === "remote" && job.remote === "Yes") ||
      job.location.toLowerCase().includes(locationFilter.toLowerCase())
    const matchesRole = roleFilter === "all" || job.role.toLowerCase().includes(roleFilter.toLowerCase())

    return matchesSearch && matchesLocation && matchesRole
  })

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div style={{ minHeight: "100vh", backgroundColor: "#f5f5f5", fontFamily: "Arial, sans-serif" }}>
        <div style={{ backgroundColor: "#ffffff", borderBottom: "2px solid #cccccc", padding: "20px 0" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px", textAlign: "center" }}>
            <h1 style={{ fontSize: "32px", color: "#333333", margin: "0 0 10px 0", fontWeight: "bold" }}>
              Career Opportunities
            </h1>
            <p style={{ fontSize: "16px", color: "#666666", margin: "0" }}>
              Find MERN Stack Developer Jobs at Top Companies
            </p>
          </div>
        </div>

        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
          <div style={{ backgroundColor: "#ffffff", border: "1px solid #dddddd", padding: "20px", marginBottom: "20px" }}>
            <h3 style={{ margin: "0 0 15px 0", color: "#333333" }}>Search Jobs</h3>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center" }}>
              <input
                type="text"
                placeholder="Search jobs or companies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  padding: "8px 12px",
                  border: "1px solid #cccccc",
                  borderRadius: "4px",
                  fontSize: "14px",
                  minWidth: "200px",
                }}
              />

              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                style={{
                  padding: "8px 12px",
                  border: "1px solid #cccccc",
                  borderRadius: "4px",
                  fontSize: "14px",
                }}
              >
                <option value="all">All Locations</option>
                <option value="remote">Remote</option>
                <option value="california">California</option>
                <option value="new york">New York</option>
                <option value="canada">Canada</option>
              </select>

              <select
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
                style={{
                  padding: "8px 12px",
                  border: "1px solid #cccccc",
                  borderRadius: "4px",
                  fontSize: "14px",
                }}
              >
                <option value="all">All Roles</option>
                <option value="full stack">Full Stack</option>
                <option value="react">React Developer</option>
                <option value="node">Node.js Developer</option>
                <option value="frontend">Frontend</option>
              </select>
            </div>
          </div>

          <div style={{ backgroundColor: "#ffffff", border: "1px solid #dddddd" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ backgroundColor: "#f8f8f8", borderBottom: "2px solid #dddddd" }}>
                  <th style={{ padding: "12px", textAlign: "left", fontWeight: "bold", color: "#333333" }}>Company</th>
                  <th style={{ padding: "12px", textAlign: "left", fontWeight: "bold", color: "#333333" }}>Role</th>
                  <th style={{ padding: "12px", textAlign: "left", fontWeight: "bold", color: "#333333" }}>Location</th>
                  <th style={{ padding: "12px", textAlign: "left", fontWeight: "bold", color: "#333333" }}>Salary</th>
                  <th style={{ padding: "12px", textAlign: "left", fontWeight: "bold", color: "#333333" }}>Remote</th>
                  <th style={{ padding: "12px", textAlign: "left", fontWeight: "bold", color: "#333333" }}>Posted</th>
                  <th style={{ padding: "12px", textAlign: "center", fontWeight: "bold", color: "#333333" }}>Apply</th>
                </tr>
              </thead>
              <tbody>
                {filteredJobs.map((job, index) => (
                  <tr
                    key={job.id}
                    style={{
                      borderBottom: "1px solid #eeeeee",
                      backgroundColor: index % 2 === 0 ? "#ffffff" : "#fafafa",
                    }}
                  >
                    <td style={{ padding: "12px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <img
                          src={job.logo || "/placeholder.svg"}
                          alt={`${job.company} logo`}
                          style={{ width: "32px", height: "32px", borderRadius: "4px", border: "1px solid #ddd" }}
                        />
                        <span style={{ fontWeight: "500", color: "#333333" }}>{job.company}</span>
                      </div>
                    </td>
                    <td style={{ padding: "12px", color: "#333333" }}>{job.role}</td>
                    <td style={{ padding: "12px", color: "#666666" }}>{job.location}</td>
                    <td style={{ padding: "12px", color: "#333333", fontWeight: "500" }}>{job.salary}</td>
                    <td style={{ padding: "12px" }}>
                      <span
                        style={{
                          padding: "2px 8px",
                          borderRadius: "12px",
                          fontSize: "12px",
                          backgroundColor: job.remote === "Yes" ? "#e8f5e8" : "#f0f0f0",
                          color: job.remote === "Yes" ? "#2d5a2d" : "#666666",
                        }}
                      >
                        {job.remote}
                      </span>
                    </td>
                    <td style={{ padding: "12px", color: "#666666", fontSize: "14px" }}>{job.posted}</td>
                    <td style={{ padding: "12px", textAlign: "center" }}>
                      <button
                        style={{
                          padding: "6px 16px",
                          backgroundColor: "#0066cc",
                          color: "white",
                          border: "none",
                          borderRadius: "4px",
                          cursor: "pointer",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                        onMouseOver={(e) => (e.target.style.backgroundColor = "#0052a3")}
                        onMouseOut={(e) => (e.target.style.backgroundColor = "#0066cc")}
                      >
                        Apply
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: "30px", padding: "20px", backgroundColor: "#ffffff", border: "1px solid #dddddd" }}>
            <h3 style={{ margin: "0 0 15px 0", color: "#333333" }}>Job Search Tips</h3>
            <ul style={{ margin: "0", paddingLeft: "20px", color: "#666666", lineHeight: "1.6" }}>
              <li>Build a strong portfolio showcasing MERN stack projects</li>
              <li>Practice coding challenges and system design questions</li>
              <li>Stay updated with latest React, Node.js, and MongoDB features</li>
              <li>Network with other developers and attend tech meetups</li>
            </ul>
          </div>
        </div>
      </div>
       <Footer />
    </div>
  )
}
