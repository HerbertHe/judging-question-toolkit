import { DiffBlankFillingArrays, DiffMultiChoiceSame } from "./DiffArrays"

/**
 * Calculate Correct Rate for Multi Choice
 * @param input
 * @param ans
 * @param duplicate_removal
 * @returns
 */
export const CalcMultiChoiceCorrectRate = <T>(
    input: T[],
    ans: T[],
    duplicate_removal: boolean = true
) => {
    const same = DiffMultiChoiceSame(input, ans, duplicate_removal)

    if (!same) return 0

    if (same === "equal") return 1

    return duplicate_removal
        ? same[1].length / Array.from(new Set(ans)).length
        : same[1].length / ans.length
}

/**
 * Calculate Correct Rate for Blank Filling
 * @param input 
 * @param ans 
 * @returns 
 */
export const CalcBlankFillingCorrectRate = <T>(input: T[], ans: T[]) => {
    const diff = DiffBlankFillingArrays(input, ans)
    if (!diff) return 0

    return (ans.length - diff.length) / ans.length
}

/**
 * Calculate Correct Rate for Choice Arrays
 * @param input 
 * @param ans 
 * @returns 
 */
export const CalcChoiceArraysCorrectRate = CalcBlankFillingCorrectRate

/**
 * Calculate Correct Rate for Judge Ararys
 * @param input 
 * @param ans 
 * @returns 
 */
export const CalcJudgeArraysCorrectRate = CalcBlankFillingCorrectRate