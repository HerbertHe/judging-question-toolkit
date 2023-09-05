/**
 * Compare if `Input` and `Answer` are equal
 * @param input
 * @param ans
 * @returns
 */
export const IsEqual = <T extends string | string[]>(
    input: T,
    ans: T
): boolean => {
    return input === ans
}
