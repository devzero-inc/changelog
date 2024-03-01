import { describe, it, expect, jest } from "bun:test";
import getChangeLogs from "./api";

global.fetch = jest.fn();

describe("getChangeLogs", () => {
  it("should fetch change logs successfully", async () => {
    const mockData = [
      {
        path: "../../content/photo-app.md",
        date: "Februrary 08, 2024",
        version: "v 1.6.0",
      },
    ];

    const mockResponse = {
      status: 200,
      data: mockData,
    };

    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => (mockResponse),
    });

    const res = await getChangeLogs();

    expect(globalThis.fetch).toHaveBeenCalledWith("http://localhost:5000/changelogs");
    expect(res).toEqual(mockResponse);
  });

  it("should throw an error if fetch fails", async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce(new Error("Fetch failed"));

    try {
      await getChangeLogs();
    } catch (error) {
      expect(error).toEqual(new Error("Fetch failed"));
    }
  });
});