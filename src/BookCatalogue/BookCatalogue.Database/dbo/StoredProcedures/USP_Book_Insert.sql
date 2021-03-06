﻿CREATE PROCEDURE [dbo].[USP_Book_Insert]
	@Title NVARCHAR(64),
	@Pages INT,
	@PublishedDate DATE,
	@AuthorsIds BigIntArrayType READONLY
AS

BEGIN TRANSACTION

	DECLARE @InsertedBook TABLE (Id BIGINT)
	DECLARE @InsertedBookId BIGINT

	INSERT INTO [Book]([Title], [Pages], [PublishedDate])
		OUTPUT INSERTED.Id INTO @InsertedBook
		VALUES (@Title, @Pages, @PublishedDate)

	SET @InsertedBookId = (SELECT TOP 1 [Id] FROM @InsertedBook)

	INSERT INTO [BookAuthor]([BookId], [AuthorId])
		SELECT [b].[Id], [a].[Item]
		FROM @InsertedBook AS [b], @AuthorsIds AS [a]

COMMIT TRANSACTION

RETURN @InsertedBookId
