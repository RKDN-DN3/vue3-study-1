
export function formatViewPagination (rangeSize:number, maxPage:number, currentPage: number) {
    const res = []
    const pages = maxPage
    const modelValue = currentPage
    const minPaginationElems = 5 + rangeSize * 2
    let rangeStart = pages <= minPaginationElems ? 1 : modelValue - rangeSize
    let rangeEnd =
        pages <= minPaginationElems ? pages : modelValue + rangeSize

    rangeEnd = rangeEnd > pages ? pages : rangeEnd
    rangeStart = rangeStart < 1 ? 1 : rangeStart

    if (pages > minPaginationElems) {
        const isStartBoundaryReached = rangeStart - 1 < 3
        const isEndBoundaryReached = pages - rangeEnd < 3

        if (isStartBoundaryReached) {
            rangeEnd = minPaginationElems - 2
            for (let i = 1; i < rangeStart; i++) {
                res.push(i)
            }
        } else {
            res.push(1)
            res.push(null)
        }

        if (isEndBoundaryReached) {
            rangeStart = pages - (minPaginationElems - 3)
            for (let i = rangeStart; i <= pages; i++) {
                res.push(i)
            }
        } else {
            for (let i = rangeStart; i <= rangeEnd; i++) {
                res.push(i)
            }
            res.push(null)
            res.push(pages)
        }
    } else {
        for (let i = rangeStart; i <= rangeEnd; i++) {
            res.push(i)
        }
    }
    return res
}
