/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Octokit } from "@octokit/rest";

const octokit = new Octokit();

interface Repository {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
}

const GitHubSection = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [activity, setActivity] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const username = "agnesabytyqi";
        const [reposResponse, eventsResponse] = await Promise.all([
          octokit.repos.listForUser({ username, sort: "updated", per_page: 5 }),
          octokit.activity.listPublicEventsForUser({ username, per_page: 5 }),
        ]);

        setRepos(reposResponse?.data as any);
        setActivity(
          eventsResponse.data.map((event: any) => {
            switch (event.type) {
              case "PushEvent":
                return `Pushed to ${event.repo.name}`;
              case "CreateEvent":
                return `Created ${event.payload.ref_type} in ${event.repo.name}`;
              case "PullRequestEvent":
                return `${event.payload.action} pull request in ${event.repo.name}`;
              default:
                return `${event.type} in ${event.repo.name}`;
            }
          })
        );
      } catch (err: any) {
        console.log("err", err);
        setError("Failed to fetch GitHub data");
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading) {
    return <div className="text-center py-20">Loading GitHub data...</div>;
  }

  if (error) {
    return <div className="text-center py-20 text-red-500">{error}</div>;
  }

  return (
    <section id="github" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 font-poppins"
        >
          GitHub Activity
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Recent Repositories</h3>
            <ul className="space-y-4">
              {repos.map((repo) => (
                <li key={repo.name} className="bg-white bg-opacity-10 rounded-lg p-4">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-semibold hover:text-pink-200 transition duration-300"
                  >
                    {repo.name}
                  </a>
                  <p className="text-sm text-gray-300 mt-2">{repo.description}</p>
                  <div className="flex items-center mt-2 text-sm">
                    <span className="mr-4">⭐ {repo.stargazers_count}</span>
                    <span>{repo.language}</span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h3 className="text-2xl font-semibold mb-4">Recent Activity</h3>
            <ul className="space-y-4">
              {activity.map((event, index) => (
                <li key={index} className="bg-white bg-opacity-10 rounded-lg p-4">
                  {event}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GitHubSection;
