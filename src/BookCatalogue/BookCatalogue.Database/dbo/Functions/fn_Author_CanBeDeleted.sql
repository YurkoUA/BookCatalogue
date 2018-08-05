CREATE FUNCTION [dbo].[fn_Author_CanBeDeleted]
(
	@authorId INT
)
RETURNS BIT
AS
BEGIN
	IF EXISTS (SELECT * FROM [BookAuthor] AS [ba] WHERE [ba].[AuthorId] = @authorId)
		RETURN 0

	RETURN 1
END
