CREATE TABLE [dbo].[Book]
(
	[Id]			BIGINT		IDENTITY(1,1)						NOT NULL,
	[Title]			NVARCHAR(64)									NOT NULL,
	[Pages]			INT			CHECK(Pages > 0)					NOT NULL,
	[Rating]		INT			CHECK(Rating >= 1 AND Rating <= 10) NOT NULL,
	[PublishedDate] DATE											NOT NULL,

	PRIMARY KEY CLUSTERED ([Id])
)
