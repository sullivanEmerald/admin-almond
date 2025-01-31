export interface nestedChildren {
    children: React.ReactNode;
    isDashboard?: boolean
}

export interface nestedChildrenOnly {
    children: React.ReactNode;
}

export interface nestedChildrenCategory {
    children: React.ReactNode;
    isCategoryHeader?: boolean
}
