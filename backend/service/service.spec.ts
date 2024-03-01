import { describe, expect, it, jest } from "bun:test";
import { getChangelogs, getChangelogById } from "./changelogService";
import { NoSuchTable, NoSuchObject, UnhandledError } from "../errors/databaseerror";

const mockQuery = jest.fn().mockResolvedValue({
  rows: [
    {
      id: "1",
      path: "../../content/employee-app.md",
      date: "January 19, 2024",
      version: "v 1.0.3",
      author: "Devzero-Inc",
    },
  ],
});

interface MockClient {
  query: jest.Mock;
  release: jest.Mock;
}

const mockClient: MockClient = {
  query: mockQuery,
  release: jest.fn(),
};

describe("getChangelogs", () => {
  it("should fetch changelogs successfully", async () => {
    const changelogs = await getChangelogs(mockClient);

    expect(mockQuery).toHaveBeenCalledWith(
      "SELECT * FROM changelog ORDER BY id"
    );
    expect(changelogs).toEqual([
      {
        id: "1",
        path: "../../content/employee-app.md",
        date: "January 19, 2024",
        version: "v 1.0.3",
        author: "Devzero-Inc",
      },
    ]);
  });

  it("should throw an error if the table is not found", async () => {
    mockQuery.mockRejectedValueOnce({ code: "42P01" });

    try {
      await getChangelogs(mockClient);
    } catch (error) {
      expect(error).toEqual(new NoSuchTable("table not found"));
    }
  });

  it("should throw an error if an unhandled error occurs", async () => {
    mockQuery.mockRejectedValueOnce(new Error("Unhandled error"));

    try {
      await getChangelogs(mockClient);
    } catch (error) {
      expect(error).toEqual(new UnhandledError("Unhandled error"));
    }
  });
  
});

describe("getChangelogById", () => {
  it("should fetch a changelog by ID successfully", async () => {
    const changelog = await getChangelogById("1", mockClient);

    expect(mockQuery).toHaveBeenCalledWith(
      "SELECT * FROM changelog WHERE id = $1",
      ["1"]
    );
    expect(changelog).toEqual({
      id: "1",
      path: "../../content/employee-app.md",
      date: "January 19, 2024",
      version: "v 1.0.3",
      author: "Devzero-Inc",
    });
  });

  it("should throw an error if the table is not found", async () => {
    mockQuery.mockRejectedValueOnce({ code: "42P01" });

    try {
      await getChangelogById("1", mockClient);
    } catch (error) {
      expect(error).toEqual(new NoSuchTable("table not found"));
    }
  });

  it("should throw an error if the object is not found", async () => {
    mockQuery.mockRejectedValueOnce({ code: "42704" });

    try {
      await getChangelogById("1", mockClient);
    } catch (error) {
      expect(error).toEqual(new NoSuchObject("object not found"));
    }
  });

  it("should throw an error if an unhandled error occurs", async () => {
    mockQuery.mockRejectedValueOnce(new Error("Unhandled error"));

    try {
      await getChangelogById("1", mockClient);
    } catch (error) {
      expect(error).toEqual(new UnhandledError("Unhandled error"));
    }
  });

});
