CREATE PROCEDURE [dbo].[USP_Author_GetList]
	@offset int = 0,
	@take int = 10
AS
	SELECT *
	FROM [v_Authors] AS [a]
	ORDER BY [a].[Name]
	OFFSET @offset ROW
	FETCH NEXT @take ROWS ONLY

RETURN 0
