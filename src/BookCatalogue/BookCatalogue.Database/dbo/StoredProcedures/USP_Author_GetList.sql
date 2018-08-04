CREATE PROCEDURE [dbo].[USP_Author_GetList]
	@offset BIGINT = 0,
	@take	BIGINT = 10
AS
	SELECT *
	FROM [v_Authors] AS [a]
	ORDER BY [a].[Name]
	OFFSET @offset ROW
	FETCH NEXT @take ROWS ONLY

RETURN 0
