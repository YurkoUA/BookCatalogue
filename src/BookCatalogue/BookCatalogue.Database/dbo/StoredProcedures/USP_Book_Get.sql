CREATE PROCEDURE [dbo].[USP_Book_Get]
	@Id BIGINT
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
	WHERE [b].[Id] = @Id

RETURN 0
