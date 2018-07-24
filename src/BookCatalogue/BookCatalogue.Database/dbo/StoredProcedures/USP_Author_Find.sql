CREATE PROCEDURE [dbo].[USP_Author_Find]
	@Name NVARCHAR(MAX)
AS
	SELECT *
	FROM [v_Authors]
	WHERE [v_Authors].[Name] LIKE CONCAT('%', @Name, '%')

RETURN 0
