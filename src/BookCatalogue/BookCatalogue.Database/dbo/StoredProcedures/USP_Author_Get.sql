CREATE PROCEDURE [dbo].[USP_Author_Get]
	@Id int
AS

	SELECT TOP 1
	*
	FROM [v_Authors]
	WHERE [v_Authors].[Id] = @Id

RETURN 0
