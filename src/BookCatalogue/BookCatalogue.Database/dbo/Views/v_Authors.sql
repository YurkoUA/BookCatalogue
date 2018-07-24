CREATE VIEW [dbo].[v_Authors]
AS

SELECT	[a].[Id],
		[a].[Name],
		COUNT([ba].[AuthorId]) AS [BooksCount]

FROM [Author]			AS [a]
LEFT JOIN [BookAuthor]	AS [ba] ON [ba].[AuthorId] = [a].[Id]

GROUP BY [a].[Id], [a].[Name]
