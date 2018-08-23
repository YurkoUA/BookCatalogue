CREATE PROCEDURE [dbo].[USP_Author_Get]
	@id BIGINT
AS

	SELECT	[a].[Id],
			[a].[Name],

			-- Book
			[b].[Id],
			[b].[Title],
			[b].[Pages],
			[b].[PublishedDate],
			[b].[Rating]

	FROM [Author] AS [a]
	LEFT JOIN [BookAuthor] AS [ba] ON [ba].[AuthorId] = [a].[Id]
	LEFT JOIN [Book] AS [b] ON [b].[Id] = [ba].[BookId]

	WHERE [a].[Id] = @Id

	ORDER BY [b].[Title]

RETURN 0
