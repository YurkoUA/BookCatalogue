CREATE PROCEDURE [dbo].[USP_Book_Insert]
	@Title NVARCHAR(64),
	@Pages INT,
	@Rating INT,
	@PublishedDate DATE,
	@AuthorsIds IntArrayType READONLY
AS

BEGIN TRANSACTION

	DECLARE @InsertedBook TABLE (Id INT)
	DECLARE @InsertedBookId INT

	INSERT INTO [Book]([Title], [Pages], [Rating], [PublishedDate])
		OUTPUT INSERTED.Id INTO @InsertedBook
		VALUES (@Title, @Pages, @Rating, @PublishedDate)

	SET @InsertedBookId = (SELECT TOP 1 [Id] FROM @InsertedBook)

	INSERT INTO [BookAuthor]([BookId], [AuthorId])
		SELECT [b].[Id], [a].[Item]
		FROM @InsertedBook AS [b], @AuthorsIds AS [a]

COMMIT TRANSACTION

RETURN @InsertedBookId
