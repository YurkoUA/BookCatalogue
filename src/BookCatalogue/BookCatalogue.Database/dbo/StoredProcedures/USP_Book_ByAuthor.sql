CREATE PROCEDURE [dbo].[USP_Book_ByAuthor]
	@AuthorId BIGINT
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
 WHERE [b].[AuthorId] = @AuthorId

RETURN 0
