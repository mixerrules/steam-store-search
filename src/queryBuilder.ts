// Class used for building html queries
export class QueryBuilder {
    private _term: string;

    private constructor(term: string) {
        this._term = term;
    }

    public static create(term: string): QueryBuilder {
        return new QueryBuilder(term);
    }

    public toString(): string {
        return this._term;
    }

    public build(): string {
        return this._term;
    }

    public search(term: string): QueryBuilder {
        this._term = term;
        return this;
    }
}