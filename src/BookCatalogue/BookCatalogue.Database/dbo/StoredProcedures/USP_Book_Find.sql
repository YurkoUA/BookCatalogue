CREATE PROCEDURE [dbo].[USP_Book_Find]
	@Title NVARCHAR(MAX)
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


RETURN 0
