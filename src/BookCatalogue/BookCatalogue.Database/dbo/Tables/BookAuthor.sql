CREATE TABLE [dbo].[BookAuthor]
(
	[BookId]	INT NOT NULL,
	[AuthorId]	INT NOT NULL,

	FOREIGN KEY (BookId) REFERENCES Book(Id),
	FOREIGN KEY (AuthorId) REFERENCES Author(Id)
)
