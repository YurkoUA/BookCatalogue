CREATE PROCEDURE [dbo].[USP_Author_Get]
	@Id BIGINT
AS

	SELECT *
	FROM [v_Authors]
	WHERE [v_Authors].[Id] = @Id

RETURN 0
