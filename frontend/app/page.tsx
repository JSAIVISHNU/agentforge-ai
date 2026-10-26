
"use client";

import { useState } from "react";

const initialTasks = [
  {
    id: 1,
    title: "Research AI engineering trends",
    type: "Research",
    status: "Completed",
    time: "10 min ago",
  },
  {
    id: 2,
    title: "Analyze uploaded documents",
    type: "Knowledge",
    status: "Running",
    time: "Just now",
  },
  {
    id: 3,
    title: "Create a learning roadmap",
    type: "Planning",
    status: "Pending",
    time: "Waiting",
  },
];

export default function Home() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(initialTasks);
  const [activeNav, setActiveNav] = useState("Overview");

  function createTask() {
    if (!task.trim()) return;

    setTasks((previous) => [
      {
        id: Date.now(),
        title: task.trim(),
        type: "AI task",
        status: "Pending",
        time: "Just now",
      },
      ...previous,
    ]);

    setTask("");
    setActiveNav("Tasks");
  }

  const completed = tasks.filter(
    (item) => item.status === "Completed"
  ).length;

  const running = tasks.filter(
    (item) => item.status === "Running"
  ).length;

  return (
    <main className="workspace">
      <aside className="sidebar">
        <a className="brand" href="#">
          <span className="brand-icon">✳</span>
          <span>AgentForge <span className="brand-ai">AI</span></span>
        </a>

        <p className="nav-label">WORKSPACE</p>

        {["Overview", "AI Agents", "Tasks", "Knowledge Base"].map(
          (item) => (
            <button
              key={item}
              className={`nav-item ${activeNav === item ? "active" : ""
                }`}
              onClick={() => setActiveNav(item)}
            >
              <span className="nav-dot">
                {item === "Overview"
                  ? "⌂"
                  : item === "AI Agents"
                    ? "✳"
                    : item === "Tasks"
                      ? "▤"
                      : "◈"}
              </span>

              {item}

              {item === "Tasks" && (
                <span className="nav-count">{tasks.length}</span>
              )}
            </button>
          )
        )}

        <div className="sidebar-bottom">
          <div className="plan-card">
            <span className="plan-icon">✦</span>
            <strong>Agent workspace</strong>
            <p>Your AI command center is ready to grow.</p>
          </div>

          <div className="profile">
            <div className="avatar">V</div>
            <div>
              <strong>Workspace Owner</strong>
              <p>Personal workspace</p>
            </div>
            <span className="profile-menu">•••</span>
          </div>
        </div>
      </aside>

      <section className="main-panel">
        <header className="topbar">
          <div className="breadcrumb">
            Workspace <span>/</span> {activeNav}
          </div>

          <div className="topbar-right">
            <span className="connection">
              <span className="connection-dot" />
              UI preview
            </span>
            <button className="icon-button" aria-label="Notifications">
              ♧
            </button>
            <div className="avatar small-avatar">V</div>
          </div>
        </header>

        <div className="content">
          <div className="welcome-row">
            <div>
              <p className="eyebrow">YOUR AI WORKSPACE</p>
              <h1>Turn ideas into <span>action.</span></h1>
              <p className="subtitle">
                Create tasks, orchestrate intelligent workflows,
                and watch your AI agents work.
              </p>
            </div>

            <div className="date-pill">✳ AgentForge workspace</div>
          </div>

          <section className="hero-card">
            <div className="hero-copy">
              <span className="hero-badge">
                ✦ YOUR AI COMMAND CENTER
              </span>

              <h2>
                What would you like
                <br />
                your AI to do?
              </h2>

              <p>
                Start with a goal. We'll build the intelligence
                behind it, one step at a time.
              </p>

              <form
                className="task-form"
                onSubmit={(event) => {
                  event.preventDefault();
                  createTask();
                }}
              >
                <textarea
                  value={task}
                  onChange={(event) => setTask(event.target.value)}
                  placeholder="e.g. Research agentic AI frameworks and prepare a comparison..."
                  rows={3}
                  aria-label="Describe your AI task"
                />

                <div className="task-form-footer">
                  <span>Describe your next big idea</span>
                  <button type="submit" disabled={!task.trim()}>
                    + Create task <span>↗</span>
                  </button>
                </div>
              </form>
            </div>

            <div className="hero-art" aria-hidden="true">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="orbit orbit-three" />

              <div className="core"><span>✳</span></div>

              <div className="float-node node-one">⌘</div>
              <div className="float-node node-two">◇</div>
              <div className="float-node node-three">✦</div>
              <div className="float-node node-four">↗</div>

              <span className="art-caption">
                INTELLIGENCE IN MOTION
              </span>
            </div>
          </section>

          <section className="stats-grid">
            <article className="stat-card">
              <div className="stat-top">
                <span>Total tasks</span>
                <span className="stat-icon">▤</span>
              </div>
              <strong>{String(tasks.length).padStart(2, "0")}</strong>
              <p>Tasks in this session</p>
            </article>

            <article className="stat-card">
              <div className="stat-top">
                <span>Completed</span>
                <span className="stat-icon green">✓</span>
              </div>
              <strong>{String(completed).padStart(2, "0")}</strong>
              <p>Successfully completed</p>
            </article>

            <article className="stat-card">
              <div className="stat-top">
                <span>In progress</span>
                <span className="stat-icon purple">◷</span>
              </div>
              <strong>{String(running).padStart(2, "0")}</strong>
              <p>Currently running</p>
            </article>

            <article className="stat-card">
              <div className="stat-top">
                <span>AI agents</span>
                <span className="stat-icon orange">✳</span>
              </div>
              <strong>01</strong>
              <p>Workspace initialized</p>
            </article>
          </section>

          <section className="tasks-section">
            <div className="section-heading">
              <div>
                <p className="eyebrow">ACTIVITY</p>
                <h2>
                  {activeNav === "Tasks" ? "All tasks" : "Recent tasks"}
                </h2>
              </div>

              <button
                className="view-all"
                onClick={() => setActiveNav("Tasks")}
              >
                View all <span>↗</span>
              </button>
            </div>

            <div className="task-table">
              <div className="table-header">
                <span>TASK NAME</span>
                <span>TYPE</span>
                <span>STATUS</span>
                <span>LAST UPDATED</span>
              </div>

              {tasks.map((item) => (
                <div className="table-row" key={item.id}>
                  <div className="task-name">
                    <span className="task-symbol">✳</span>
                    <span>{item.title}</span>
                  </div>

                  <span className="task-type">{item.type}</span>

                  <span
                    className={`status status-${item.status.toLowerCase()}`}
                  >
                    <span />
                    {item.status}
                  </span>

                  <span className="task-time">{item.time}</span>
                </div>
              ))}

              {tasks.length === 0 && (
                <p className="empty-state">
                  No tasks yet. Create your first AI task above.
                </p>
              )}
            </div>

            <p className="footer-note">
              AgentForge AI <span>·</span> Built to make intelligence actionable.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
