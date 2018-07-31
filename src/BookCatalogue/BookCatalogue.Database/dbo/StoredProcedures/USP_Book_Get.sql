CREATE PROCEDURE [dbo].[USP_Book_Get]
	@Id int
AS

	SELECT *
	FROM [v_Books]
	WHERE [v_Books].[Id] = @Id

RETURN 0
