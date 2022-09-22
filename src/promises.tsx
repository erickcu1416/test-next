import { ItemsResponse, SimpleItem } from "./interfaces/ItemsResponse";

export async function firstFilter(firstFilterResult: SimpleItem[], amount: number, page: number): Promise<SimpleItem[]> {
    console.log('[firstFilterResult]', firstFilterResult);

    return new Promise((resolve, reject) => {
        console.log('Page IN PROMISE', page);
        const newFirst = page * amount;
        let first = newFirst - 1;
        if (page === 1) {
            first = 0;
        }
        console.log('[firstFilterResult]', firstFilterResult);
        console.log('First', first);
        console.log('amount', amount);

        const newData: SimpleItem[] = firstFilterResult.slice(first, first + amount);
        console.log('New data', newData);
        resolve(newData);
    });
}

export async function secondFilter(firstFilterResult: SimpleItem[], newYearActually: Number): Promise<SimpleItem[]> {
    return new Promise((resolve, reject) => {
        const newData: SimpleItem[] = firstFilterResult.filter(x => x.releaseYear >= newYearActually);
        resolve(newData);
    });
}

export async function thirdFilter(secondFilterResult: SimpleItem[]): Promise<SimpleItem[]> {
    return new Promise((resolve, reject) => {
        let newData: SimpleItem[] = secondFilterResult;
        if (secondFilter.length > 1) {
            newData = secondFilterResult.sort((a, b) => a.title.localeCompare(b.title));
        }
        resolve(newData);
    });
}

export async function fourthFilter(thirdFilterResult: SimpleItem[], type: string): Promise<SimpleItem[]> {
    return new Promise((resolve, reject) => {
        const newData: SimpleItem[] = thirdFilterResult.filter(x => x.programType === type);
        resolve(newData);
    });
}