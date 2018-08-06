CREATE PROCEDURE [dbo].[USP_Book_Find]
	@title NVARCHAR(MAX),
	@offset BIGINT = 0,
	@take	BIGINT = 10
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
	WHERE [b].[Title] LIKE CONCAT('%', @Title, '%')

	ORDER BY [b].[Title]

	OFFSET @offset ROW
	FETCH NEXT @take ROWS ONLY


RETURN 0
