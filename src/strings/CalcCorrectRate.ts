import { DiffAnsSame } from "./DiffAns"

/**
 * Calculate Correct Rate
 * @param input 
 * @param ans 
 * @returns 
 */
export const CalcCorrectRate = (input: string, ans: string): number => {
    const same = DiffAnsSame(input, ans)

    if (!same) return 0

    if (same === "equal") return 1

    return same.length / ans.length
}
