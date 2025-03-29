#include<bits/stdc++.h>
using namespace std;
long long a[100005],dp[100005],n;
void solve ()
{
    cin>>n;
    for (int i=1;i<=n;i++) cin>>a[i];
    dp[n]=1;
    for (int i=n-1;i>=1;i--)
    {
        if (1ll*a[i]*a[i+1]>0) dp[i]=1;
        else dp[i]=dp[i+1]+1;
    }
    for (int i=1;i<=n;i++) cout<<dp[i]<<" ";
}
int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0),cout.tie(0);
    int t;
    cin>>t;
    while (t--)
    {
        solve();
        cout<<endl;
    }
}
