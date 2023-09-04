import { IsEqual } from "./IsEqual"

/**
 * Diff `Input` & `Answer` Same Part for Multi Choice
 * @param input
 * @param ans
 * @param duplicate_removal
 * @returns
 */
export const DiffMultiChoiceSame = <T>(
    input: T[],
    ans: T[],
    duplicate_removal: boolean = true
): number[][] | "equal" | undefined => {
    const input_h = !duplicate_removal ? input : Array.from(new Set(input))
    const ans_h = !duplicate_removal ? ans : Array.from(new Set(ans))

    if (!input_h || !ans_h) return undefined

    if (input_h.length === 0 || ans_h.length === 0) return undefined

    if (IsEqual(input_h, ans_h)) return "equal"

    const min_len = Math.min(input_h.length, ans_h.length)
    const diff_base_is_input = min_len === input_h.length

    let res_input: number[] = []
    let res_ans: number[] = []

    if (diff_base_is_input) {
        for (let i = 0; i < min_len; i++) {
            let c_tmp = ans_h.indexOf(input_h[i])
            if (c_tmp !== -1) {
                res_input.push(i)
                res_ans.push(c_tmp)
            }
        }
    } else {
        for (let i = 0; i < min_len; i++) {
            let c_tmp = input_h.indexOf(ans[i])
            if (c_tmp !== -1) {
                res_input.push(c_tmp)
                res_ans.push(i)
            }
        }
    }

    return [res_input, res_ans]
}

/**
 * Diff `Input` and `Answer` for Blank Filling
 * @param input
 * @param ans
 * @returns
 */
export const DiffBlankFillingArrays = <T>(
    input: T[],
    ans: T[]
): number[] | undefined => {
    if (!input || !ans) return undefined

    if (input.length === 0 || ans.length === 0) return undefined

    if (input.length > ans.length) return undefined

    if (IsEqual(input, ans)) return []

    let res: number[] = []

    for (let i = 0; i < input.length; i++) {
        if (input[i] !== ans[i]) {
            res.push(i)
        }
    }

    return res
}

/**
 * Diff `Input` and `Answer` for Choosing
 * @param input
 * @param ans
 * @returns
 */
export const DiffChoiceArrays = DiffBlankFillingArrays

/**
 * Diff `Input` and `Answer` for Judging
 * @param input
 * @param ans
 * @returns
 */
export const DiffJudgeArrays = DiffBlankFillingArrays
