export type IPaginationMetadata = {
	currentPage: number;
	itemPerPage: number;
	totalPage: number;
};

export type IPaginationResponse<IData> = {
	data: IData[];
	pagination: IPaginationMetadata;
};
