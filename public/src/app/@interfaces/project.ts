// TODO: to correct interface dependencies

export interface Project {
    fiance: string;
    fiancee: string;
    budgetGenPlanUsd: number;
    weddingDate: Date;
    email?: string;
    telephone?: string;
    notes?: string;
    created?: Date;
    nationalMoney?: string;
    currencyIndex?: number;
}

export interface Currency {
    nationalMoney: string;
    currencyIndex: number;
}
export interface Note {
    created: Date;
    text: string;
}