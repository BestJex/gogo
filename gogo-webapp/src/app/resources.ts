/**
 * 条目
 */
export interface SearchResultEntry {
    name: string,
    url: string,
    desc: string
}

/**
 * 搜索结果
 */
export interface SearchResult {
    key: string
    page: number
    amount: number
    elapsed: number
    entries: SearchResultEntry[]
    error: any
}

/**
 * 提示结果
 */
export interface LintResult {
    key: string
    lints: string[]
    error: any
}