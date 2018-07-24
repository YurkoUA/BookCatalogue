CREATE PROCEDURE [dbo].[USP_Book_ByAuthor]
	@AuthorId int
AS
	SELECT * FROM [v_Books] WHERE [v_Books].[AuthorId] = @AuthorId

RETURN 0
