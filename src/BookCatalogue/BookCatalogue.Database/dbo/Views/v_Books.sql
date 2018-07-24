CREATE VIEW [dbo].[v_Books]
AS

SELECT	[b].[Id],
		[b].[Title],
		[b].[Pages],
		[b].[PublishedDate],
		[b].[Rating],

		[a].[Id]	AS [AuthorId],
		[a].[Name]	AS [Name]

FROM [Book] AS [b]
LEFT JOIN [BookAuthor] AS [ba] ON [ba].[BookId] = [b].[Id]
JOIN [Author] AS [a] ON [a].[Id] = [ba].[AuthorId]
