import { IsEqual } from "./IsEqual"

/**
 * Diff `Input` & `Answer` Same Part
 * @param input
 * @param ans
 * @returns
 */
export const DiffAnsSame = <T extends string | string[]>(
    input: T,
    ans: T
): number[][] | "equal" | undefined => {
    if (!input || !ans) return undefined

    if (input.length === 0 || ans.length === 0) return undefined

    if (IsEqual(input, ans)) return "equal"

    const min_len = Math.min(input.length, ans.length)
    const diff_base_is_input = min_len === input.length

    let min_p = 0
    let res_input: number[] = []
    let res_ans: number[] = []

    if (diff_base_is_input) {
        for (let i = 0; i < min_len; i++) {
            let c_tmp = ans.indexOf(input[i], min_p)
            if (c_tmp !== -1) {
                res_input.push(i)
                res_ans.push(c_tmp)
                min_p = c_tmp + 1
            }
        }
    } else {
        for (let i = 0; i < min_len; i++) {
            let c_tmp = input.indexOf(ans[i], min_p)
            if (c_tmp !== -1) {
                res_input.push(c_tmp)
                res_ans.push(i)

                min_p = c_tmp + 1
            }
        }
    }

    return [res_input, res_ans]
}

/**
 * Diff `Input` and `Answer` Same Part & Return Value
 * @param input
 * @param ans
 * @returns
 */
export const DiffAnsSameAndReturnValue = <T extends string | string[]>(
    input: T,
    ans: T
): [number | "equal", string | string[]][][] => {
    const res = DiffAnsSame(input, ans)

    if (!res) return []

    if (res === "equal") return [[["equal", input]]]

    return [
        res[0].map((idx) => [idx, input[idx]]),
        res[1].map((idx) => [idx, ans[idx]]),
    ]
}

/**
 * Diff `Input` & `Answer`
 * @param input
 * @param ans
 * @returns
 */
export const DiffAns = <T extends string | string[]>(
    input: T,
    ans: T
): number[][] => {
    const same = DiffAnsSame(input, ans)

    if (!same) return []

    if (same === "equal") return []

    // 处理不同的部分
    return [
        Array.from(new Array(input.length).keys()).filter(
            (idx) => !same[0].includes(idx)
        ),
        Array.from(new Array(ans.length).keys()).filter(
            (idx) => !same[1].includes(idx)
        ),
    ]
}

/**
 * Diff `Input` and `Answer` & Return Value
 * @param input
 * @param ans
 * @returns
 */
export const DiffAnsAndReturnValue = <T extends string | string[]>(
    input: T,
    ans: T
) => {
    const diff = DiffAns(input, ans)

    if (diff.length === 0) return []

    return [
        diff[0].map((idx) => [idx, input[idx]]),
        diff[1].map((idx) => [idx, ans[idx]]),
    ]
}
