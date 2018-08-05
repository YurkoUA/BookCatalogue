CREATE PROCEDURE [dbo].[USP_Book_Update]
	@Id BIGINT,
	@Title NVARCHAR(64),
	@Pages INT,
	@PublishedDate DATE,
	@AuthorsIds BigIntArrayType READONLY
AS
	
BEGIN TRANSACTION
	UPDATE [Book] SET
		[Title] = @Title,
		[Pages] = @Pages,
		[PublishedDate] = @PublishedDate
	WHERE [Book].[Id] = @Id

	DELETE FROM [BookAuthor]
	WHERE [BookAuthor].[BookId] = @Id AND [BookAuthor].[AuthorId] NOT IN (SELECT * FROM @AuthorsIds)

	DECLARE @authorsToInsert BigIntArrayType

	INSERT INTO @authorsToInsert
	SELECT [Item] FROM @AuthorsIds WHERE [Item] NOT IN (SELECT [ba].[AuthorId] FROM [BookAuthor] AS [ba] WHERE [ba].[BookId] = @Id)

	INSERT INTO [BookAuthor]([BookId], [AuthorId])
		SELECT @Id, [a].[Item]
		FROM @authorsToInsert AS [a]

COMMIT TRANSACTION
RETURN 0
