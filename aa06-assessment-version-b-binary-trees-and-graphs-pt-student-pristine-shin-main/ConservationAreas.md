# Problem 2a (Graphs): Identifying conservation areas

A nonprofit organization you are assisting has provided you with various sets of
topographical map data for acres of forest land. This data describes physical
features of an area that can be visualized in this format:

![mapData1]

Each section on the map represents an acre of land. The number on each section
represents the height elevation.

Your organization is looking to protect certain endangered species of plants and
animals by identifying conservation areas that cover the elevations at which
these organisms live. Your task is to 1) determine if a given data set contains
a potential conservation area and 2) return the coordinates if a potential area
is found.

A conservation area must meet the following two characteristics:

1. Every acre has a **height between 2 and 4, inclusive.**
2. The area must contain at least **4 or more connected acres.**

Acres are considered to be connected that are directly above, below, or to the
side. **There are no diagonal connections!**

You must **return the coordinates for each acre in all valid conservation
areas.** This output must include the coordinates for each acre in the valid conservation area. (**Note:** The order of the coordinates does not matter.) 

Each set of map data will have **at most ONE** valid area suitable for forest
conservation. Assume that acres beyond the edge of the provided map data are
invalid.

Example map data and outputs:

mapData1:
![mapData1-valid]

**mapData1 has one valid conservation area.**

```plaintext
Output = [[1, 1], [1, 2], [1, 3], [2, 2], [2, 3]]
```

mapData2:
![mapData2]

**mapData2 does not have a valid conservation area.**

```plaintext
Output = null
```

mapData3:
![mapData3-valid]

**mapData3 has one valid conservation area.**

```plaintext
Output = [[0, 2], [0, 3], [1, 2], [1, 3]]
```

To solve this problem, you will complete the skeleton code provided in
__problems/02-graphs-identifying-conservation-areas.js__. The file contains
three functions for you to fill out, two of which serve as helper functions.
Descriptions of these functions and their desired behavior follow below.
Although you could potentially solve this problem in many different ways, the
specs require that you complete each of these three functions.

**It is strongly recommended that you utilize information from all provided
materials to understand and solve these problems. The provided materials include
the contents of this __README__, the test spec files, and the provided skeleton
code (which includes comments and local tests).**

## Find valid adjacent acres for starting acre

The first step is to solve `findAdjacentValidAcresFor(startingAcre, mapData)` to
determine which acres **immediately adjacent** to the `startingAcre` are valid
acres. An immediately adjacent acre is an acre that is directly North, South,
East, or West (at the top, bottom, right, or left) of the `startingAcre`.

`findAdjacentValidAcresFor` should return the coordinates of all valid acres
immediately adjacent to the `startingAcre`. Note that the order of the
coordinates does not matter.

Example inputs and outputs using the same `mapData` input:

`mapData` =

![mapData1]

Example 1:

```plaintext
startingAcre = [1, 1]

Output = [[1, 2]]
```

Example 2:

```plaintext
startingAcre = [2, 3]

Output = [[1, 3], [2, 2]]
```

Local tests are provided. The test file itself can also help to solve and debug
your code.

Run `npm test test/02a-graphs-find-adjacent-valid-acres-for.test.js` to run only
the specs for this section.

## Get valid conservation area

`getValidConservationArea(startingAcre, mapData, visited)` should determine if
a `startingAcre` is inside a valid conservation area. If it is in a valid
conservation area, it should return an array of coordinates for all the acres
in that conservation area. Note that the order of the coordinates does not
matter.

If the `startingAcre` is not valid, or if no valid conservation area is found
containing the `startingAcre`, then return `null`.

You can (but don't have to) use `findAdjacentValidAcresFor` to implement
`getValidConservationArea`.

Example inputs and outputs using the same `mapData` input:

`mapData` =

![mapData3]

Example 1:

```plaintext
startingAcre = [3, 2]

Output = null
```

Example 2:

```plaintext
startingAcre = [0, 0]

Output = null
```

Example 3:

```plaintext
startingAcre = [0, 2]

Output = [[0, 2], [0, 3], [1, 2], [1, 3]]
```

Local tests are provided. The test file itself can also help to solve and debug
your code.

Run `npm test test/02b-graphs-get-valid-conservation-area.test.js` to run only
the specs for this section.

## Identifying a conservation area by acres

You will use `identifyConservationAreaByAcres(mapData)` to traverse the
parameter `mapData` and determine if the `mapData` has a valid conservation
area. If it does, return the coordinates of all the acres in the valid
conservation area; otherwise, return `null`.

You can (but don't have to) use the other functions to implement
`identifyConservationAreaByAcres`.

Example inputs and outputs:

`mapData` =

![mapData1]

```plaintext
Output = [[1, 1], [1, 2], [1, 3], [2, 2], [2, 3]].
```

`mapData` =

![mapData2]

```plaintext
Output = null.
```

`mapData` =

![mapData3]

```plaintext
Output = [[0, 2], [0, 3], [1, 2], [1, 3]]
```

Local tests are provided, and the test file itself can help to solve and debug
your code.

Run `npm test test/02c-graphs-identify-conservation-area-by-acres.test.js` to
run only the specs for this section.

[mapData1]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Module-Assessments/assets/w6-assessment-v-b-map-data-1.png
[mapData1-valid]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Module-Assessments/assets/w6-assessment-v-b-map-data-1-valid.png
[mapData2]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Module-Assessments/assets/w6-assessment-v-b-map-data-2.png
[mapData3]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Module-Assessments/assets/w6-assessment-v-b-map-data-3.png
[mapData3-valid]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Module-Assessments/assets/w6-assessment-v-b-map-data-3-valid.png
