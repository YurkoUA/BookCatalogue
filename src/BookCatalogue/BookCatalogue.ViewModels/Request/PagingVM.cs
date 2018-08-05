namespace BookCatalogue.ViewModels.Request
{
    public class PagingVM
    {
        public long Offset { get; set; } = 0;
        public long Take { get; set; } = 20;
    }
}
