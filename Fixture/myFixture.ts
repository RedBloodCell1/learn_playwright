import { test as myTest } from "@playwright/test";

type martin = {
  age: number;
  email: string;
};

const myFixtureTest = myTest.extend<martin>({
  age: 27,
  email: "martinasdasd@gmail.com",
});

export const test = myFixtureTest;
