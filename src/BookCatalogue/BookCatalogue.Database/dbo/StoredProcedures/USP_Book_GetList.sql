CREATE PROCEDURE [dbo].[USP_Book_GetList]
	@offset BIGINT = 0,
	@take	BIGINT = 20
AS
	SELECT	[b].[Id],
			[b].[Title],
			[b].[Pages],
			[b].[PublishedDate],
			[b].[Rating],

			-- Author
			[b].[AuthorId]	AS [Id],
			[b].[Name]

	FROM [v_Books] AS [b]
	ORDER BY [b].[Title]
	OFFSET @offset ROWS
	FETCH NEXT @take ROWS ONLY

RETURN 0
