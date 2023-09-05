import { test } from "vitest"
import {
    DiffAnsSame,
    DiffAnsSameAndReturnValue,
    DiffAns,
    DiffAnsAndReturnValue,
} from "../src/index"

test("测试 DiffAnsSame 函数", () => {
    const res = DiffAnsSame("abcdfg", "cdefh")
    console.log(res)
})

test("测试 DiffAnsSame 函数（字符串序列）", () => {
    const res = DiffAnsSame(
        ["a", "b", "c", "xd", "f", "g"],
        ["c", "xd", "e", "f", "h"]
    )
    console.log(res)
})

test("测试 DiffAnsSameAndReturnValue 函数", () => {
    const res = DiffAnsSameAndReturnValue("abcdfg", "cdefh")
    console.log(res)
})

test("测试 DiffAnsSameAndReturnValue 函数（字符串序列）", () => {
    const res = DiffAnsSameAndReturnValue(
        ["a", "b", "c", "xd", "f", "g"],
        ["c", "xd", "e", "f", "h"]
    )
    console.log(res)
})


test("测试 DiffAns 函数", () => {
    const res = DiffAns("abcdfg", "cdefh")
    console.log(res)
})

test("测试 DiffAnsAndReturnValue 函数", () => {
    const res = DiffAnsAndReturnValue("abcdfg", "cdefh")
    console.log(res)
})
