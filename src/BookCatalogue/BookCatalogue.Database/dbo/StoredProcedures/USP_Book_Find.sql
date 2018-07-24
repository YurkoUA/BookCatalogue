CREATE PROCEDURE [dbo].[USP_Book_Find]
	@Title NVARCHAR(MAX)
AS
	SELECT *
	FROM [v_Books]
	WHERE [v_Books].[Title] LIKE CONCAT('%', @Title, '%')


RETURN 0
