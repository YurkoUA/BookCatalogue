CREATE PROCEDURE [dbo].[USP_Book_GetList]
	@offset int = 0,
	@take int = 20
AS
	SELECT *
	FROM [v_Books] AS [b]
	ORDER BY [b].[Title]
	OFFSET @offset ROWS
	FETCH NEXT @take ROWS ONLY

RETURN 0
