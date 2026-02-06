from __future__ import annotations

import pandas as pd


def aggregate_hiring_data(csv_path: str) -> dict[str, pd.DataFrame]:
    """Aggregate hiring data from a CSV file.

    Returns a dictionary with:
      - "monthly_media_applications": month x media application counts
      - "monthly_app_to_join_rate": month-level conversion rate from application to join (%)
    """
    df = pd.read_csv(csv_path)

    df = df.dropna(subset=["apply_date", "media", "status"])
    df["apply_date"] = pd.to_datetime(df["apply_date"], errors="coerce")
    df = df.dropna(subset=["apply_date"])

    df["month"] = df["apply_date"].dt.to_period("M").astype(str)

    applications = df[df["status"] == "応募"]
    joins = df[df["status"] == "入社"]

    monthly_media_applications = (
        applications.groupby(["month", "media"])
        .size()
        .unstack(fill_value=0)
        .sort_index()
    )

    monthly_app_counts = applications.groupby("month").size()
    monthly_join_counts = joins.groupby("month").size()

    monthly_app_to_join_rate = (
        (monthly_join_counts / monthly_app_counts)
        .fillna(0)
        .mul(100)
        .rename("apply_to_join_rate")
        .to_frame()
    )

    return {
        "monthly_media_applications": monthly_media_applications,
        "monthly_app_to_join_rate": monthly_app_to_join_rate,
    }


if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser(description="Aggregate hiring data.")
    parser.add_argument("csv_path", help="Path to hiring CSV file.")
    args = parser.parse_args()

    results = aggregate_hiring_data(args.csv_path)
    print("Monthly media applications:")
    print(results["monthly_media_applications"])
    print("\nMonthly application to join rate (%):")
    print(results["monthly_app_to_join_rate"])
