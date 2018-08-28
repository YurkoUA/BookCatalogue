CREATE PROCEDURE [dbo].[USP_Author_Find]
	@name NVARCHAR(MAX),
	@offset BIGINT = 0,
	@take	BIGINT = 10
AS
	SELECT *
	FROM [v_Authors] AS [a]
	WHERE [a].[Name] LIKE CONCAT('%', @name, '%')

	ORDER BY [a].[Name]

	OFFSET @offset ROW
	FETCH NEXT @take ROWS ONLY

RETURN 0
