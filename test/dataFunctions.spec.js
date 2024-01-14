import {
  filterByGenre,
  filterByStudio,
  filterByYear,
} from "../src/lib/dataFunctions";

describe("Data Filters", () => {
  it('should filter data by genre "Fantasía"', () => {
    const mockData = [
      {
        facts: {
          genre: "Fantasía",
        },
      },
      {
        facts: {
          genre: "Misterio",
        },
      },
      {
        facts: {
          genre: "Drama",
        },
      },
    ];

    const expectedFilteredData = [
      {
        facts: {
          genre: "Fantasía",
        },
      },
    ];

    const filteredData = filterByGenre(mockData, "genre", "Fantasía");
    expect(filteredData).toEqual(expectedFilteredData);
  }),

  it('should filter data by studio "CoMix Wave Films"', () => {
    const mockData = [
      {
        facts: {
          studio: "CoMix Wave Films",
        },
      },
      {
        facts: {
          studio: "Studio Ghibli",
        },
      },
      {
        facts: {
          studio: "Kyoto Animation",
        },
      },
    ];

    const expectedFilteredData = [
      {
        facts: {
          studio: "CoMix Wave Films",
        },
      },
    ];

    const filteredData = filterByStudio(
      mockData,
      "studio",
      "CoMix Wave Films"
    );
    expect(filteredData).toEqual(expectedFilteredData);
  }),

  it('should filter data by year "2016"', () => {
    const mockData = [
      {
        facts: {
          year: 2016,
        },
      },
      {
        facts: {
          year: 2019,
        },
      },
      {
        facts: {
          year: 2022,
        },
      },
    ];

    const expectedFilteredData = [
      {
        facts: {
          year: 2016,
        },
      },
    ];

    const filteredData = filterByYear(mockData, "year", 2016);
    expect(filteredData).toStrictEqual(expectedFilteredData);
  });
});
