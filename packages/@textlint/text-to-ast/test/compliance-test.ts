// LICENSE : MIT
"use strict";
import { test, isTxtAST } from "@textlint/ast-tester";
import { parse } from "../src/plaintext-parser";
import assert from "assert";
describe("Compliance tests", function() {
    it("should pass the test", function() {
        const AST = parse("this is text.\n" + "m" + "test");
        test(AST);
        assert(isTxtAST(AST));
    });
});
