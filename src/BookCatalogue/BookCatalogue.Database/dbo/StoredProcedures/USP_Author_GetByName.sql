CREATE PROCEDURE [dbo].[USP_Author_GetByName]
	@Name NVARCHAR(MAX)
AS
	SELECT TOP 1
	*
	FROM [v_Authors]
	WHERE [v_Authors].[Name] = @Name

RETURN 0
