import React from "react";
import Link from "next/link";
import { LuBot, LuKeyRound, LuCode, LuCheck } from "react-icons/lu";

/**
 * AgentApiSection — highlights the Venmail Agent REST API.
 *
 * The pitch: admins (and individual users) can issue bearer tokens so AI
 * agents — Claude, MCP servers, or any HTTP client — can read threads and
 * send mail from a Venmail inbox. Two provisioning paths:
 *   1. Admin → AI Agents → create a dedicated ai_agent inbox.
 *   2. Any user → Profile → "Share with AI agent" on their own inbox.
 */
const AgentApiSection = () => {
  const capabilities = [
    {
      icon: LuKeyRound,
      title: "Scoped bearer tokens",
      description:
        "Issue per-agent tokens with fine-grained scopes (inbox:read, mail:send, mark_read). Rotate or revoke any time.",
    },
    {
      icon: LuBot,
      title: "AI-agent inboxes",
      description:
        "Provision dedicated inboxes for automated agents, or let a human share their own inbox with a model they trust.",
    },
    {
      icon: LuCode,
      title: "Clean REST + typed SDK",
      description:
        "A handful of JSON endpoints, OpenAPI docs, and an official TypeScript SDK at @venmail/vsm. Drop-in MCP server too.",
    },
  ];

  const endpoints = [
    { method: "GET", path: "/v1/agent/me", desc: "Identity + scopes" },
    { method: "GET", path: "/v1/agent/threads", desc: "List threads" },
    { method: "GET", path: "/v1/agent/threads/{id}", desc: "Read a thread" },
    { method: "POST", path: "/v1/agent/threads/{id}/reply", desc: "Reply inline" },
    { method: "POST", path: "/v1/agent/messages", desc: "Send new mail" },
    { method: "POST", path: "/v1/agent/token/refresh", desc: "Rotate token" },
  ];

  return (
    <section
      id="agent-api"
      className="relative py-24 bg-gradient-to-b from-white via-orange-50/40 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-primary-200 rounded-full mb-5 text-xs font-semibold uppercase tracking-wider text-primary-600 shadow-sm">
            <span className="inline-block w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
            New — AI agent API
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-5">
            Give your AI its own inbox.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Provision an email inbox, generate a scoped API token, and any AI
            agent can read, reply, and send mail on its behalf — with audit,
            rotation, and revocation built in.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Capability cards */}
          <div className="space-y-5">
            {capabilities.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex gap-4 p-5 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            ))}

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/docs/agents"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gray-900 text-white font-medium text-sm hover:bg-gray-800 transition-colors"
              >
                <LuCode className="w-4 h-4" /> View the API docs
              </Link>
              <Link
                href="/venmail-agent"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 font-medium text-sm hover:bg-gray-50 transition-colors"
              >
                Try Venmail Agent
              </Link>
            </div>
          </div>

          {/* Code snippet + endpoint map */}
          <div className="space-y-5">
            <div className="rounded-xl bg-gray-900 text-gray-100 shadow-xl overflow-hidden">
              <div className="flex items-center gap-1.5 px-4 py-2.5 bg-gray-800/60 border-b border-gray-700/60">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-300/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                <span className="ml-3 text-xs text-gray-400 font-mono">
                  agent.ts
                </span>
              </div>
              <pre className="p-5 text-[13px] leading-relaxed font-mono overflow-x-auto">
                <code>{`import { AgentClient } from "@venmail/vsm";

const client = new AgentClient({
  baseUrl: "https://mail.example.com",
  token: process.env.VENMAIL_AGENT_TOKEN!,
});

const { data: threads } = await client.listThreads({
  folder: "inbox",
  limit: 10,
});

await client.replyToThread(threads[0].id, {
  body: "Thanks — looking into this now.",
});`}</code>
              </pre>
            </div>

            <div className="rounded-xl bg-white border border-gray-100 shadow-sm p-5">
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
                Surface area
              </div>
              <ul className="space-y-1.5">
                {endpoints.map((ep) => (
                  <li
                    key={ep.path}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="flex items-center gap-2 font-mono text-gray-700">
                      <span
                        className={`inline-block text-[10px] font-bold px-1.5 py-0.5 rounded ${
                          ep.method === "GET"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-emerald-100 text-emerald-700"
                        }`}
                      >
                        {ep.method}
                      </span>
                      <span className="text-xs">{ep.path}</span>
                    </span>
                    <span className="text-xs text-gray-500">{ep.desc}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-500">
                <LuCheck className="w-3.5 h-3.5 text-emerald-500" />
                Ships with a TypeScript SDK + an MCP server stub for Claude
                Desktop / Claude Code.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentApiSection;
